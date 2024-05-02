import React from "react"
import './GitHubContributions.css'

function GitHubContributions() {
    return (
        <div className={"contributions-div"}>
            <div>
                <h2 id={"contributions-title"}>GitHub Contributions</h2>
            </div>
            <div className={'chart-outer-div'}>
                <div className={'chart-inner-div'}>
                    <img src="https://ghchart.rshah.org/454343/tobycourtis"
                         alt="2016rshah's Github chart"
                         id={'chart-img'}/>
                </div>
            </div>
        </div>
    )
}

export default GitHubContributions;