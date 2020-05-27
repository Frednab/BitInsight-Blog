
const initState={
     posts:[
        {
               id:'1', 
               title:'Bitcoin Worth $282K from the 2016 Bitfinex Hack on the Move',   
               body:'  The cryptocurrency community has noticed a number of bitcoins from the August 2, 2016, Bitfinex breach has been moved. A small 30 BTC transaction ($282,000) from the stash has moved from the hacker’s address to an unknown bitcoin address. The last time coins from the Bitfinex incident moved was June and August 2019, as the bitcoins hadn’t transferred for three years since then.',
               subtitle:'Bitcoin Hashrate Lost 47 Exahash of Hashrate Since the ATH, Difficulty Sees a 6% Downward Adjustment',
               para:'Just before the third bitcoin halving, which cut miner revenue by 50%, the overall BTC hashrate spiked to around 140 EH/s on May 3, 2020. The network hit this monumental milestone, seven days before the notorious block reward halving. After the halving was complete, observers noted that the hashrate only dipped by 10-15% around 48 hours later. However, hashrate charts and data have some significant lag, and most of the time hashrate is measured in 3-12 hour intervals.'
            },
        {
              id:'2', 
              title:'South Africa Leads Crypto Revolution in Africa – Challenges Spur and Slow Adoption', 
              body:'  Africans rank atop global cryptocurrency ownership rates, according to a new report by Arcade Research. South Africa ranks third globally with 13% of its internet users owning or using cryptocurrencies, while 11% of connected Nigerians own cryptocurrencies in the fifth-placed populous West African country.',
              subtitle:'Uganda, Nigeria, South Africa, Kenya, and Ghana are listed in the report among the top 10 countries where “cryptocurrency” is most searched on Google. Economic challenges work both ways, as the digital divide slows the adoption of cryptocurrency while high financial fees make virtual currencies an attractive alternative.',
              para:'Africa also has some of the world’s most inflationary economies where fiscal indiscipline and controversial monetary policies sometimes erode citizens’ savings overnight. Apart from governments’ heavy hand, external factors such as sanctions and conflict also threaten savings, making cryptocurrency a less exposed investment.'
            },
        {
              id:'3', 
              title:'Bitcoin Hashrate Slides 33% Since Halving - Difficulty Drops, Issues in Sichuan China',
              body:'   It’s been 11 days since the third bitcoin block reward halving. Data now shows that the overall SHA256 hashrate lost around 47 exahash per second (EH/s), since the all-time high of 140 EH/s on May 3. With more than 33% of the hashrate lost, reports stemming from Sichuan China indicate that bitcoin mining operations have been dealing with electrical shortages, and some operations have been forced to shut down machines.',
              subtitle:'Just before the third bitcoin halving, which cut miner revenue by 50%, the overall BTC hashrate spiked to around 140 EH/s on May 3, 2020. The network hit this monumental milestone, seven days before the notorious block reward halving. After the halving was complete, observers noted that the hashrate only dipped by 10-15% around 48 hours later. However, hashrate charts and data have some significant lag, and most of the time hashrate is measured in 3-12 hour intervals.',
              para:'After the incident, the value of bitcoin staged a modest comeback a week later and Bitfinex promised customers they would be paid back. Those stolen coins were moved to an address that anyone can follow using a standard blockchain explorer. The bitcoins sat for three years and didn’t move until June and August 2019. When a BTC transaction in August took place, the transaction monitoring account Whale Alert notified the public on Twitter that roughly 300 BTC ($2.7M) was moved in ten transactions.'
            }
     ]
}


const rootReducer = (state=initState,action) =>{
      if(action.type === 'DELETE_POST'){
            let newPosts = state.posts.filter(post=>{
               return action.id !== post.id   
            });
            return{
                  ...state,
                  posts:newPosts
            }
      }
      return state;
}

export default rootReducer