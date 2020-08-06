import { ICommnets } from './feeds_metadata';

export interface IFeedsFooter {
    id?: string | number,
    username: string,
    views?: string,
    description?: string,
    likes?: string | number,
    comments?: Array<ICommnets>
}