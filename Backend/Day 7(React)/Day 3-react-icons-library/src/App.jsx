import React from 'react'
import Swal from 'sweetalert2'
import { MdHomeFilled } from "react-icons/md";
import { IoMdSave } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';

const App = () => {
  const demo = () => { 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning'
    })
    }

  return (
    <div>
      <button onClick={demo}>Demo</button>
      <h1><MdHomeFilled />
</h1>
<h2>
<IoMdSave fontSize="400px" />
</h2>
<h3><CountUp
  start={-875.039}
  end={160527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="EUR "
  suffix=" left"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp></h3>
<h1><Typewriter
        options={{
          strings: ['Hello, World!', 'Welcome to my app!', 'Enjoy your stay!'],
          autoStart: true,
          loop: true,
        }}
      /></h1>
    </div>
  )

}

export default App;