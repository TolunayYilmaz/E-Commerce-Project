import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Icon } from 'lucide-react';
import { burger } from '@lucide/lab';

function App() {
 

  return (
<>
<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Icon iconNode={burger} />
    </>
  )
}

export default App
