import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

<<<<<<< HEAD
export default props => (
=======
export default () => (
>>>>>>> a124684902aa2e1949eeef1cdf83e2bb30378030
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)