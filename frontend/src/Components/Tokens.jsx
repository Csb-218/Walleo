import React from 'react'
import { coin } from '../Assets'

const Tokens = ({ tokens }) => {
    return (
        <>
           
            {/* Component: Two Lines List With Trailing Text And Leading Image  */}
            <ul className="divide-y divide-slate-100 text-white  w-full">
                {
                    tokens?.map((token,index) => {
                        return (
                            <li key={index} className="flex items-center gap-10 px-4 py-3">

                                <div className="flex items-center self-center shrink-0">
                                    <img src={token?.logo || coin } alt="token logo" className="w-12 rounded" />
                                </div>

                                <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
                                    <h4 className="w-full text-base truncate ">{token?.symbol}</h4>
                                    <p className="w-full text-sm truncate ">{token?.name}</p>
                                </div>
                                <div className="text-xs  w-20  text-wrap ">
                                    <p>{Number(token?.balance)/10 ** Number(token?.decimals)}</p>
                                    <p>Token</p>
                                </div>
                            </li>
                        )
                    })
                }


            </ul>
            {/* End Two Lines List With Trailing Text And Leading Image  */}

        </>
    )
}

export default Tokens