const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Index extends React.Component {

    render() {

        
        const { vgconsoles } = this.props

        return (
            <DefaultLayout title='All Consoles' group='products'>
                <h1 id='index-title'>Consoles Store Front</h1>
                <ul id='all-index'>
                    {vgconsoles.map((vgconsole) => {
                        return (
                            <li key={vgconsole._id}>
                                <div>
                                    <a href={`/products/${vgconsole._id}`}><img src={`${vgconsole.imgUrl}`}></img></a>
                                </div>
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