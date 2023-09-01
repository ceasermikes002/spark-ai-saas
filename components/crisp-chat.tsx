"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat=()=>{
    useEffect(() => {
        Crisp.configure("85f23af5-d57b-484a-bae1-e93c2c94da58")
        
    },[])
    return null
}