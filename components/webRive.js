import React from 'react'
import Rive,{useRive} from 'rive-react'

const WebRive = (props) => {

    const params = {
        src: '/wave.riv',
        autoplay: false,
        
      };
      const { RiveComponent, rive } = useRive(params);
      //const { RiveMobile, mobile } = useRive(params);
      
    return (
        <div>
                      <div 
           style={{position:'relative'}}
           onMouseEnter={() => rive && rive.play()}
          onMouseLeave={() => rive && rive.pause()}
          className="service-item service-paper">
          <div className='icon-background'>
          <div className="web-icon service-icon" />
            </div>
            <div className="service-talk">
              <h4>Web Development</h4>
            <p>
              Full-stack web technologies ranging from web applications to E-commerce solutions through a variety of use cases.
            </p>
              </div>
            
                
              <div style={{}} className='rive-container' >
              {/* <RiveComponent
              
              // onMouseEnter={() => rive && rive.play()}
              // onMouseLeave={() => rive && rive.pause()}
            /> */}

                <RiveComponent />
              </div>
          </div>
        </div>
    )
}

export default WebRive
