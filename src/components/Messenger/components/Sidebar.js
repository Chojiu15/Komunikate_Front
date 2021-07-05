import { useState } from 'react'
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ idUser }) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    //const conversationsOpen = activeKey === CONVERSATIONS_KEY //check whether conversion tab is open
    console.log(idUser)



    return (
        <div style={{ width: '500px'}} className='d-flex flex-column'>
           <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Komunikators</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='border border-right overflow-auto flex-grow-1'> 
                {/* have to add border here to make border-right working*/}
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts setActiveKey={setActiveKey} conversationsKey={CONVERSATIONS_KEY} idUser={idUser}/>
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border border-top border-right small' style={{'borderWidth': 'medium'}}>
                    Username: <span className='text-muted'>{idUser.username}</span>
                </div>
            </Tab.Container>
        </div>
        
       
    )
}

