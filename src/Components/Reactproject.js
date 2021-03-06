import React from 'react'
import '../style/sections.scss'
import ecommerceImg from './images/projectsscreen/capture-e-commerce-opt.webp'
import groupomaniaImg from './images/projectsscreen/capture-groupomania-opt.webp'
// import primeurbioImg from './images/projectsscreen/capture-primeur-bio-opt.webp'


function Reactproject() {
    return (
        <div className='section'>

            <h2 className='front-end-projects-title'>projets react</h2>


            <div className='project-display-container'>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://art-shop-agnes-tshibangu.netlify.app"><button className='button button-website'>Voir le site web</button></a>
                        <a href="https://github.com/agnestshibangu/art-shop"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>e-commerce</h3>
                        <p className='project-description'>un site de e-commerce en REACT</p>
                        <img className='project-image' src={ecommerceImg} alt="" />
                    </div>


                </div>


                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://github.com/agnestshibangu/Groupomania-social-network-P7"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>groupomania</h3>
                        <p className='project-description'>un réseau social en REACT</p>
                        <img className='project-image' src={groupomaniaImg} alt="" />
                    </div>


                </div>

                {/* <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://lucky-bonbon-ea7a19.netlify.app/"><button className='button button-website'>Voir le site web</button></a>
                        <a href="https://github.com/agnestshibangu/REACT-EXO-PA"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>primeur bio</h3>
                        <p className='project-description'>site vitrine pour un primeur bio</p>
                        <img className='project-image' src={primeurbioImg} alt="" />
                    </div>


                </div> */}

            </div>

        </div>
    )
}

export default Reactproject