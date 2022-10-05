// Default Layout 2 for customers

const React = require('react')

class DefaultLayout2 extends React.Component {

    render() {
        
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='/css/styles.css'></link>
                </head>
                <body>
                    <nav className='navbar'> 
                        {/* leads to customer's front page */}
                        <a href={`/products/customer`} className='site-title'>{this.props.group}</a>
                        <ul>
                            <li>
                                {/* Link to about store information on customer route*/}
                                <a href={`/products/customer/about`}>About Us</a>
                            </li>
                            <li>
                                {/* Link to contact information about the store on customer route*/}
                                <a href={`/products/customer/contact`}>Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout2