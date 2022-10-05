const React = require('react')
const DefaultLayout2 = require('../views/layouts/DefaultLayout2')

// Index page for customers, identical except for the difference in HTML wrapper (DefaultLayouts2)
class Index2 extends React.Component {

    render() {

        
        const { vgconsoles } = this.props

        return (
            <DefaultLayout2 title='All Consoles' group='Home'>
                <h1 className='title'>The Console Dungeon</h1>
                <ul id='all-index'>
                    {vgconsoles.map((vgconsole) => {
                        return (
                            <li key={vgconsole._id}>
                                <div>
                                    <a href={`/products/customer/${vgconsole._id}`}><img src={`${vgconsole.imgUrl}`}></img></a>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </DefaultLayout2>
        )
    }
}

module.exports = Index2