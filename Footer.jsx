import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <div>
                            <p>🤎메타버스 속 환경 캠페인🤎</p>
                            <h4>Worldwide, available</h4>
                        </div>
                    </div>
                    <div className='email'>
                        <h4>💚metabusenvironment@naver.com💚</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>사이트 설명</h4>
                    <p>메타버스 게임을 통해 환경에 대해서 생각해볼 수 있는 시간을 제공합니다.<br></br>
                        나아가 환경과 공존하는 세상을 꿈꾸어요.
                    </p>

                    <br></br><p>&copy; Designed By <span className="colors"> TEAM 25 </span> || All Rights Reserved.</p>
                </div>
                </div>
            </div>
        
    )
}

export default Footer