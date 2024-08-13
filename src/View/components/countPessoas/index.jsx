
import React, { useState } from 'react';

export default function CountPessoas({ countParams = 0 }) {


    return (
        <span className='numberHeader'>{countParams}</span>
    );
}
