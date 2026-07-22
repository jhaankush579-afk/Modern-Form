import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule
} from '@angular/forms';

import { User } from '../../service/user.service';
import Swal from 'sweetalert2';

/** A single selectable player option shown as a premium card. */
interface PlayerOption {
  value: string;
  label: string;
  icon: string; // emoji shown on the card
  sport: 'cricket' | 'football';
}

/**
 * User Information Form
 * ---------------------
 * Premium glassmorphism form built with Angular Reactive Forms.
 * No backend — on submit the data is logged to the console and a
 * Bootstrap success alert is shown.
 */
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  /** Reactive form group backing every field. */
  readonly form: FormGroup;

  /** Range slider value for live display above the slider. */
  readonly screenTime = signal(6);
  readonly isLoading = signal(false)

  /** Player selection options rendered as premium cards. */
  readonly players: PlayerOption[] = [
    { value: 'virat', label: 'Virat Kohli', icon: '🏏', sport: 'cricket' },
    { value: 'ronaldo', label: 'Cristiano Ronaldo', icon: '⚽', sport: 'football' },
    { value: 'dhoni', label: 'MS Dhoni', icon: '🏏', sport: 'cricket' },
    { value: 'messi', label: 'Lionel Messi', icon: '⚽', sport: 'football' },
  ];

  constructor(private readonly fb: FormBuilder , private userService: User ) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{1,10}$'), Validators.maxLength(10)],
      ],
      favoritePlayer: ['', [Validators.required]],
      instagram: [''],
      screenTime: [6],
    });

    // Keep the live "Hours" readout in sync with the slider.
    this.form.get('screenTime')!.valueChanges.subscribe((v: number) => {
      this.screenTime.set(Number(v));
    });
  }

  /** Convenience getters for template validation checks. */
  get fullName() { return this.form.get('fullName')!; }
  get phone() { return this.form.get('phone')!; }
  get favoritePlayer() { return this.form.get('favoritePlayer')!; }
  get instagram() { return this.form.get('instagram')!; }

  /** True only when every required field is valid — drives submit button state. */
  get isFormValid(): boolean {
    return (
      this.fullName.valid &&
      this.phone.valid &&
      this.favoritePlayer.valid
    );
  }

  /** Selects a player card (single-choice radio behaviour). */
  selectPlayer(value: string): void {
    this.favoritePlayer.setValue(value);
    this.favoritePlayer.markAsTouched();
  }

  /** Whether a field should render its invalid state + error message. */
  isInvalid(controlName: 'fullName' | 'phone' | 'favoritePlayer'): boolean {
    const c = this.form.get(controlName)!;
    return c.invalid && (c.touched || c.dirty);
  }

  onSubmit(): void {
    this.isLoading.set(true)
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const formData = this.form.value;
    this.userService.postUserData(formData).subscribe(
      (res) => {
        Swal.fire("Success", "Form submitted successfully", "success");
        this.isLoading.set(false)
      },
      (error) => {
        Swal.fire("Error", "Form submission failed", "error");
        console.log(error)
        alert(JSON.stringify(error))
        this.isLoading.set(false)
      }
    )
    console.log(this.isLoading())
  }

  /** Clears every field and hides the success alert. */
  onReset(): void {
    this.form.reset({ screenTime: 6 });
    this.screenTime.set(6);
  }

}
