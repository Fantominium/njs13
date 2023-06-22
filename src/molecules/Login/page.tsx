import React from 'react'
import PocketBase from 'pocketbase';

type Props = {
  name: string,
  email:string,
}

export async function getUser (props ?: Props) {
    const pb = new PocketBase('http://139.162.198.236:80');
    const authData = await pb.admins.authWithPassword("malcolm.garner4@gmail.com", "F4nt0m1n1um");
    // console.log(pb.authStore.token);

    const records = await pb.collection('FormUsers').getFirstListItem('Email="malcolm.garner4+pkbse@gmail.com"' )

      console.log(records);
      
}

