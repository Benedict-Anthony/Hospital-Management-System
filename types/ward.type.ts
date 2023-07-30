import {Types} from "mongoose"

export type WardType = {
    name: string
    beds: number
    beds_available: number
    bed_total: number
    patiens:Types.ObjectId 
} 

export type bedType = {
    code: string
    patient:Types.ObjectId
}