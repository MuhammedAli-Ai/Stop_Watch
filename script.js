

    let minutes = 0
    let seconds = 0
    let miliseconds = 0

    let Mins = document.getElementById("Mins")
    let Sec = document.getElementById("Sec")
    let Milisec = document.getElementById("Milisec")

    let RenderTime = () => {
        Mins.innerHTML = minutes
        Sec.innerHTML = seconds
        Milisec.innerHTML = miliseconds
    }

    RenderTime()

    let startTimer = () => {
      miliseconds++
      if (miliseconds === 100) {
        seconds++
        miliseconds = 0
      }
      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      RenderTime()
    }

    let Interval;
    let start = () => {
        if (!Interval) { 
          Interval = setInterval(startTimer, 10) 
        }
      }
      
      let pause = () => {
        clearInterval(Interval)
        Interval = null
      }
      
      let reset = () => {
        clearInterval(Interval)
        Interval = null
        minutes = 0
        seconds = 0
        miliseconds = 0
        RenderTime()
      }
      