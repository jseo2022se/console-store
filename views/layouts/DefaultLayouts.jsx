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
                        <a href={`/products`} className='site-title'>{this.props.group}</a>
                        <ul>
                            <li>
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