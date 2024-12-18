"use server"

import { UserSchemaType } from "@/constants/schema/user.schema"
import apiRequest from "@/lib/axios"

export const registerUser = async (userData: UserSchemaType) => {
    try {
        const response = await apiRequest.post("/user/register", userData)
        return response
    } catch (error) {
        console.log("Error registering User", error)
    }
}