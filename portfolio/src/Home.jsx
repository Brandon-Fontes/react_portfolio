import React from 'react'
import headshot from './headshot.jpg'

export default function Home() {
    return (
        <>
        <div className="row mt-5"></div>
          <div className="row mt-5">
          	 <div className="col-3"></div>
          	 <div className="col-2">
          	 	<img className="headshot" src={headshot} alt="headshot"/>
          	 </div>
             <div className="col-4 back">
              <p className="about">About Me</p>
                  <p className="about">My name is Brandon Fontes. I am a junior full stack web developer operating out of Utah. I love to play guitar and spend time with my bearded dragon Bean. Have any questions?</p> 
                      <p className="about"><a className="about" href="mailto:brandonjfontes@gmail.com"> Contact me</a></p></div>
          </div>
          <div className="row mt-3">
            <div className="col-3"></div>
            <div className="col-6 back">
              <p className="lead">Social Media</p>
              <a href="https://www.linkedin.com/in/brandon-fontes-5619a393/"><img src="data:image/png;base64,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"
               className="social social1" alt="linkedin logo"/></a>
               <a href="https://www.instagram.com/brandon_fontes/"><img src="data:image/jpeg;base64,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" className="social" alt="instagram logo" /></a>
               <a href="https://github.com/Brandon-Fontes"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAe1BMVEUAAAD///9gYGD8/Pzg4ODj4+Ps7Oz5+fnv7++oqKi3t7f19fXd3d2srKx5eXlOTk5ra2u+vr6YmJg6OjotLS1nZ2fW1tZwcHChoaHCwsLS0tJEREQoKCiLi4szMzPKyspYWFgSEhKTk5MhISFDQ0N+fn4LCwsjIyMXFxekLj9YAAAK5UlEQVR4nO1d62KqOBA+FRXECxbvd7Rqff8n3LWnOpOQCSEkJOzy/ayUJEPmPpn8+dOiRYsWLVq0aNGiRYsWLSxgv5teBvFm2e33o95oeYoH6SQ5up6VK5w7h/Ey+hAi6sXp9P9GmUncE1ODoczmMHM90ZpwTbvF9HjTJe64nq91JGOCXWiEm9Xd9bTt4euiwDFCsoyvruduB9km0KPID0Y31/M3j+moAkF+MLy4XoNZrPpVKfKD9Ox6IcYwVaFIoMJZYep6LWaQLCWE6G3jdNJJZsf599f+OLtmq8Pg1B3S/xFNXK+nOs4xtbrueJJ8i//pPlukW2rfLJN6V2AcE/HK+vG0+H+TlNhhY/vztof5SbSk0VrZZL/fTiKiRs01bm+C9USDkj7M+SbS4k3dKp8CWbDSeVES54nba6J7eM07Npud7svOaZh7W/MM20meItW+bJrbK03jnzG/gFN1L27Nv3P0ZWCmtWHLc78RRbHfcK+NmhOLO/OawphF3uG8hKAp9ts3J12XJr/mgCP3wuC77WHOeSuGXfyEo7iWdq8ZR5YkPfMRMs6D8l8n71mSbGyMcWvWTtmzO9tSaCxhRa3nMqWmyZ7ZdIjX2odx7oc2XRLG4w73FkeqCGaifbtZGUbSRg+rY1VAiqfZsx1PZtyHpeXBdLHAk+zaz90x5pufDuEcO679OrIOzE7xUiNjVRDVk4hhZIqHchZ/tICIxxsHFurdmsZURwd/sqy2YXFSflDbqIrAJn2NrH2OnHwKJWDOrlUFZGjgXp0DFwLPrGZT4YCGXtc7tBzIzQnrLirCAUmPEhwXNC1R0nP8EQ63g6zKELvLKQoDkW55IFG2rTKEUXyh5EsseuD392iT6Q0wH7z0i+gFmHG9CRsgATsU/Y70dE+jVCJBVohQfqPx++VfbwXXou/EOCb9Q7m3Z0xeRKxaEPeUfLstoM8oDjVyqY0+T7jHLOssptNpp7PjDeA5n9IRDrCC36Pq6zGAGZrxXPTA/YPH6Te78dhN15tuiJzHIOyfxrfk5bukuX8V162gveTFRkFfUpzbSnILez55ng6W+cT4izS9z9vxTyaogxObIIh9hRKtZuxhOsS+veVX9i8DUeQoeIRIBCAP1IPcBhL6xLbNM0AFEFYy+jLuVc8XTIbatXw6sxJGxCBooyiUytkFcjco6Zaru6gC0s+DR06WlqoMCGCQwq0emiAeriuiRQDpFDLnl6ulqQKKd/7M4RnH7jHU8QVk0dBFsDRt0F4emI6O7Tawqj/JZ6YmaSL0MflhMvMLVcdKZR77/Mr0ITFTIQxJE64GgGCTxf3MHFT5C0nNE8gtpyYKsI6sZI08hlAestUix8thoQGK5sgyTkLjXg9S2wOybg41D1ioMtbZmSOJ3O0F5nGY/wKDTfJhzibFiVSnIOK7M9tgDhIGFhxFqAKZRAHN4+w0GGjigH7IqHXyhCSlFqs8ZBfgyEhEn+RsnyboPQkHH5ylBKF6jZZ8Rg37v6DNexTltLFeFUDokP50ZHixAujRQJxn5perAvBEQ/IZ49LkCdp0B3nuKAIJqSwVZ9UkyOEgwuWoGAXirOSHO1shCa1poczQUSEkaD4ynJQ/AWcEZFwCXB5HbiCk98jMtUHvD4NeMGh+N31kQMiT51EqN/ggQJruMCcnx+IebzUbUmHHhw1N/AR5vHBb/IhNHN/Dk1t5JlqPCZA24rj4EZuAkD1pSHdE6zEBUtNCuMBJpxRYMKn3VqL1mACp/MGVcGKggJ4lD7hZUsUSZTwpfsQmwGYkHfP6aQJGm5MMKZix9dOE5B0Vf8MiQJyRrFu/PFEQcjYBNCGDsfXrHcgkOAlTK+wTUdWWEZAOlv80mYvWYwKkY+yYd8AUIGVs/bY90MSJ3gFdTMe9NPuAFoJ08ECqO6GJyvB8bxhDoGOdKh/KIkCc0axrtLwPQMtPMJqc2PZQp0snU+qOsyG/2IkPCEqFrpX6tkMTOii/UXjGIu7vOF8gLLP/gR0hS/fbgsBeZn7FCoA4H52EMloH+oIk8QlZdDdHsCE1SmfxrViydGEHlM7RqskqlOSZ+RT6xwfdIlEh9mcXYMhKuiZZ0MYSTwaqxBydllT6KBY0j6TeBrauo4o2dCRDkmAynvaSZfhA7bg6xQOyQnKEdV+l078Ism4I8JSralDwZmQ71eiRJnkMANWmml6rKiCCQp6WeMKs3SbLeSpOyCZQaFH22NEk90gLGkGcuOuFAlOVtjwxWKwkjQAgoe/u/BtYsvK+jgfB6rQgHwbVsJtcZTmA+Cw41WuIKAW5PSgUc9jfAhVzZ/InjWR6CoTEHaK/Lg+jg0opSs8eK2ufoEhGoACWy94wYEsXt8ep6PmcCp1/kG5OGyshbVxsTM8qFIYqND5HBUBuD45CXEnFSrrynTsUMVJRrWgfur0RDU2E8TAuo2G0TPNOxyMtXfbXj9WWCN6X445+aMNiKfuynkT3B80vW+VAU9AdqN6xgYwT150tUFYLR6rfnocwBHdPDp+jodzkD3untFPi8gfgYkdhRwBSgIzd/bbS6CTh144UulFCpwLEQAaQk6otBogPmAbIu5fgoIkiMeRKrwuZP9o32hgDCo9wDtpY/Oc3pNWzJbvAo+3qQxtmtBAutvFSSoQmlSfYyzEPOpvqQ9s6pI55Nvk9YiSOoBYUdpWqC0An7LxoDopbjfHf6JfLhUU7BfZbmf5Z30iF+bBNmPwnvyNeIkPEPUXRtxJhIUReTzow4wot3tN42Sl5260weqDOPJgL/dgm7HlZXhGScy3M+6gLBi+bpSLjgOeet0HLB4SK/R7V0TF1/Wmqi/mAk6cPoBYKfh1ThRCT4kktPLjTBjkcsKnBRTqwetmmk0VnctmodbrIlIbGDX0lbRPqxwMthata0u9+onZ6DW84v+6HwIF5Th1q9/pQogkWJs4b+HHAtxGxXL3XLaZWoQn+FmFZX9o2jng1rJWiezpDgSbMq/27FZwphWUjXZrJnWKaMLLKJ53zAiM3WGnX0cqiF9JkhrnSj0bUPBiTg7Vbv3UK74towt7O6I+1hsFWJHHGfIe4712fJixJ/BMmf8Fc6JXzcHZrdJNTpKCh5TSZM+rMz+u8nmCbJwk+3W4xOdwmnaejWJEmCbMpfbNMMNicsPRoRDWasGU+ziq1lMAGz2TqsRJN2HqWmm5U0wabslnS9ztWoQkrjIbeX4vOat2QrFPVp8k3G2cY+mbSC8CZIlTdgzZNbqwBaPWmV2PgMp4jcWxIkyZ3LtwfNWCXPMFnKYQ5PT2aTDknu98QkuRPd3UFUkWHJkc+6e63EmaR63wZ59SlBk1ylwf4bKrlsch5wnzcvjRNDrlKHq+uA1TAPBeYD9bMXilJk0PE/1xYG+oh8vngYAAq6FxME/CXHnmKfPScNKWrClEL99Pr4ypUy74KSZJYENH1MaqmgqMo1xf9bBalu1Z+1n3pCn4JfUkLa0B89mCoXPcY5XnmTazG4stCt4++k1aOJrEy2/L/I3DSsMI0UpNn3zYeXgWvg7OxM8ZbhxemGIeR/hZbt2cLjOO+rtrN4bMRgZKSuJVP8bzRTxtptirgOtbaLMGp8dpXikVcVjefbp6H5U3gulY+19SPG2zEl8R9MVgWsFHQiyeNCSyawn3WST9Hw5zPGwx7m8Hq6n3SxiIe12x6u6zH4/FgfTmsst1/xFBt0aJFixYtWrRo0aKFc/wDL9OCYKnRNGgAAAAASUVORK5CYII=" className="social" alt="github logo" /></a>
            </div>
          </div>
        </>
    )
}
