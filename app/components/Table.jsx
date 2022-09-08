import React from 'react'
import PropTypes from 'prop-types'
import { hashtag } from './icons'

function TableHead() {
    return (
        <thead>
            <tr>
                <td style={{ width: '5%'}}>{hashtag}</td> 
                <td style={{ width: '50%'}}>Reposotory</td> 
                <td style={{ width: '15%'}}>Stars</td> 
                <td style={{ width: '15%'}}>Forks</td> 
                <td style={{ width: '15%'}}>Open Issue</td> 
           </tr>
        </thead>
    )
}

function TableRow ({index, owner, stargazers_count, forks, open_issues, name }) {
    const { login, avatar_url } = owner

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className='row gap-md'>
                    <img
                    width={32}
                    height={32}
                    className='avatar'
                    src={avatar_url} 
                    alt={`Avatar for ${login}`}/>
                    <a href={`https://github.com/${login}/${name}`}>{name}</a>
                </div>
            </td>
            <td>{stargazers_count}</td>
            <td>{forks}</td>
            <td>{open_issues}</td>
        </tr>
    )
}

TableRow.PropTypes = {
    index: PropTypes.number.isRequired,
    owner: PropTypes.object.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    open_issues: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

const Table = ({repos}) => {
  return (
    <table>
        <TableHead />
        <tbody>
            {repos.map((repo, index) => {
                return <TableRow key={index} index={index} {...repo} />
            })}
        </tbody>
    </table>
  )
}

export default Table

Table.PropTypes = {
    repos: PropTypes.array.isRequired
}