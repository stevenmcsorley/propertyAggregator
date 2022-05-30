export interface PriceDrop {
    __typename: string;
    lastPriceChangeDate: string;
    percentageChangeLabel?: any;
}

export interface OtherPropertyImage {
    __typename: string;
    small: string;
    large: string;
    caption?: any;
}

export interface Branch {
    __typename: string;
    name: string;
    branchDetailsUri: string;
    phone: string;
    logoUrl: string;
    branchId: number;
}

export interface Feature {
    __typename: string;
    content: number;
    iconId: string;
}

export interface ResponsiveImgList {
    __typename: string;
    width: number;
    src: string;
}

export interface Image {
    __typename: string;
    src: string;
    caption?: any;
    responsiveImgList: ResponsiveImgList[];
}

export interface Features {
    __typename: string;
    zone?: any;
    tubeLines?: any;
}

export interface Transport {
    __typename: string;
    title: string;
    poiType: string;
    distanceInMiles: number;
    features: Features;
}

export interface ListingUris {
    __typename: string;
    contact: string;
    detail: string;
}

export interface RootObject {
    __typename: string;
    numberOfVideos: number;
    numberOfImages: number;
    numberOfFloorPlans: number;
    numberOfViews: number;
    listingId: string;
    title: string;
    publishedOnLabel: string;
    publishedOn: string;
    availableFrom: string;
    priceDrop: PriceDrop;
    isPremium: boolean;
    highlights: any[];
    otherPropertyImages: OtherPropertyImage[];
    branch: Branch;
    features: Feature[];
    image: Image;
    transports: Transport[];
    flag: string;
    priceTitle: string;
    price: string;
    alternativeRentFrequencyLabel?: any;
    address: string;
    tags: any[];
    listingUris: ListingUris;
}


