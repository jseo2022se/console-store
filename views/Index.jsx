const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Index extends React.Component {

    render() {

        
        const { vgconsoles } = this.props

        return (
            <DefaultLayout title='All Consoles' group='products'>
                <h1>Consoles Index Page</h1>
                <ul id='all-index'>
                    {vgconsoles.map((vgconsole) => {
                        return (
                            <li key={vgconsole._id}>
                                {/* to be changed to proper console url and console properties */}
                                The name of the console is <a href={`/products/${vgconsole._id}`}>{ vgconsole.name }</a>.
                            </li>
                        )
                    })}
                </ul>

                <nav>
                    <a href='/products/new'>Add a new console</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index