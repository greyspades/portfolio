import React from 'react'
import Rive,{useRive} from 'rive-react'

const DesignRive = (props) => {

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
          <div className="design-icon service-icon" />
            </div>
                <div className='service-talk'>
                <h4>UI/UX Design</h4>
            <p>
              Beautiful and responsive 
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

export default DesignRive
