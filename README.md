# loop fund

project 4 octant v2 hackathon

## pitch
building a platform where builders create profiles and goals to get funded. supporters stake through octant and morpho vaults, keeping their principal while the yield goes to the builders they choose. we also use uniswap v4 hooks to direct a small fee from swaps into the same funding pool. builders post progress updates, supporters earn badges. sustainable funding for public goods, using yield instead of donations.

## technologies used
* octant v2 (erc-4626 yield-donating vaults)
* morpho blue vaults (optimized lending yield source)
* uniswap v4 hooks (swap-fee based public goods funding)
* erc-1155 badges (supporter recognition)
* public profiles + goals registry (on-chain identity and funding targets)
* allocation router + splitters (directing yield to selected builders or tag-based groups)
* social feed layer (progress and transparency for ongoing work)

## flow summary
1. a builder creates a profile and optionally defines one or more goals.  
2. a supporter stakes assets into an octant + morpho powered vault.  
3. yield generated from staking is automatically directed to selected profiles/goals.  
4. uniswap v4 hooks optionally provide extra passive funding from trading activity.  
5. builders post updates showing what they built with the funding; supporters receive badges as recognition.
