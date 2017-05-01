import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
export default class CoreLayout extends React.Component {
    render() {
        console.log("Home loaded")
        return (
            <div><Header/><Footer/></div>
        )
    }
}