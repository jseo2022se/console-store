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
                        {/* Only link available on the navigation bar and leads to customer's front page */}
                        <a href={`/products/customer`} className='site-title'>{this.props.group}</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout2