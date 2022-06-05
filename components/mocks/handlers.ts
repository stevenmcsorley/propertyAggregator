import { rest } from 'msw';
import { priceblockData } from '../price-block/PriceBlock.testdata';

export const handlers = [

    rest.get('http://localhost:3000/property/zoopla/glasgow', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(priceblockData))
    })
]