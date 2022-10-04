const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Index extends React.Component {

    render() {

        
        const { vgconsoles } = this.props

        return (
            <DefaultLayout title='All Consoles' group='Home'>
                <h1 className='title'>The Console Dungeon</h1>
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

            </DefaultLayout>
        )
    }
}

module.exports = Index