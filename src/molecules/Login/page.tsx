import React from 'react'
import PocketBase from 'pocketbase';

type Props = {}

export async function getUser (props ?: Props) {
    const pb = new PocketBase('http://139.162.198.236:80');
    const authData = await pb.admins.authWithPassword('app', 'applicationTest');
    // console.log(pb.authStore.token);

    const records = await pb.collection('FormUsers').getFirstListItem('FirstName="Malcolm"')

      console.log(records);
      
}

