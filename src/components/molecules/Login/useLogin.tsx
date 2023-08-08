"use client"
import React from 'react'
import GET_USERS from '@/query/GET_USERS'
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

type Props = {
  name: string,
  email:string,
}

export function useLogin (props ?: Props) {
  const {data} = useSuspenseQuery(GET_USERS);
  console.log(data, " data from get user query");
  
      
}

