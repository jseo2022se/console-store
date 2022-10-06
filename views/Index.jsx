const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

// Index layout for what store owners will see on their front page 

class Index extends React.Component {

    render() {

        
        const { vgconsoles } = this.props

        return (
            <DefaultLayout title='All Consoles' group='Home'>
                <h1 className='title'>The Console Dungeon</h1>
                <br></br>
                <h2 className='show-details'>Products</h2>
                <ul id='all-index'>
                    {vgconsoles.map((vgconsole) => {
                        return (
                            <li key={vgconsole._id}>
                                <div>
                                    {/* Clickable images that lead to the product's show page */}
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