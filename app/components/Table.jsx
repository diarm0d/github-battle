import React from "react";
import propTypes from "prop-types";
import { hashtag } from "./icons";
import Tooltip from "./Tooltip";

function MoreInfo({
    created_at,
    forked_count,
    language,
    updated_at,
    watchers,
    login,
  }) {
    return (
      <ul className="tooltip stack">
        <li className="split">
          <span>By:</span> <span>{login}</span>
        </li>
        {language && (
          <li className="split">
            <span>Language:</span> <span>{language}</span>
          </li>
        )}
        <li className="split">
          <span>Created:</span>{" "}
          <span>{new Date(created_at).toLocaleDateString()}</span>
        </li>
        <li className="split">
          <span>Updated:</span>{" "}
          <span>{new Date(updated_at).toLocaleDateString()}</span>
        </li>
        <li className="split">
          <span>Watchers:</span>
          <span>{watchers.toLocaleString()}</span>
        </li>
        {forked_count && (
          <li className="split">
            <span>Forked:</span> <span>{forked_count.toLocaleString()}</span>
          </li>
        )}
      </ul>
    );
  }
  
  MoreInfo.propTypes = {
    created_at: propTypes.string.isRequired,
    language: propTypes.string,
    updated_at: propTypes.string.isRequired,
    watchers: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    login: propTypes.string.isRequired,
  };

function TableHead() {
  return (
    <thead>
      <tr>
        <td style={{ width: "5%" }}>{hashtag}</td>
        <td style={{ width: "50%" }}>Reposotory</td>
        <td style={{ width: "15%" }}>Stars</td>
        <td style={{ width: "15%" }}>Forks</td>
        <td style={{ width: "15%" }}>Open Issue</td>
      </tr>
    </thead>
  );
}

function TableRow({
  index,
  owner,
  stargazers_count,
  forks,
  open_issues,
  name,
  created_at,
  updated_at,
  language,
  watchers,
}) {
  const { login, avatar_url, type } = owner;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Tooltip element={<MoreInfo
              created_at={created_at}
              language={language}
              updated_at={updated_at}
              watchers={watchers}
              type={type}
              login={login}
            />}>
          <div className="row gap-md">
            <img
              width={32}
              height={32}
              className="avatar"
              src={avatar_url}
              alt={`Avatar for ${login}`}
            />
            <a href={`https://github.com/${login}/${name}`}>{name}</a>
          </div>
        </Tooltip>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
}

TableRow.propTypes = {
  index: propTypes.number.isRequired,
  owner: propTypes.object.isRequired,
  stargazers_count: propTypes.number.isRequired,
  forks: propTypes.number.isRequired,
  open_issues: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
};

const Table = ({ repos }) => {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => {
          return <TableRow key={index} index={index} {...repo} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  repos: propTypes.array.isRequired,
};
