// Default Layout for store owners/employees

const React = require('react')

class DefaultLayout extends React.Component {

    render() {
        
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='/css/styles.css'></link>
                </head>
                <body>
                    <nav className='navbar'> 
                        {/* Link to back to the store front page */}
                        <a href={`/products`} className='site-title'>{this.props.group}</a>
                        <ul>
                            <li>
                                {/* Link to add a new product to the store */}
                                <a href={`/products/new`}>Add a new product</a> 
                            </li>
                        </ul>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout