import { Schema, SchemaFactory , Prop } from "@nestjs/mongoose";
import { Document } from "mongoose"

@Schema({ collection: "UserRecords" })
export class users {

    @Prop()
    fullName!: string
    
    @Prop()
    favoritePlayer!: string
    
    @Prop()
    instagram!: string

    @Prop()
    phone!: string

    @Prop()
    screenTime!: number
}
export const userSchema = SchemaFactory.createForClass(users)
export type userDocument = users & Document