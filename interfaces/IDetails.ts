export interface BackToResultsLink {
    __typename: string;
    linkType: string;
    uri: string;
}

export interface Breadcrumb {
    __typename: string;
    label: string;
    tracking: string;
    uri: string;
    noAppend?: number;
    i18nLabelKey?: any;
}

export interface AdditionalLink {
    __typename: string;
    caption: string;
    original: string;
    type: string;
    url?: any;
}

export interface AdTargeting {
    __typename: string;
    acorn: number;
    acornType: number;
    areaName: string;
    bedsMax: number;
    bedsMin: number;
    branchId: number;
    branchLogoUrl: string;
    branchName: string;
    brandName: string;
    chainFree: boolean;
    companyId: number;
    countryCode: string;
    countyAreaName: string;
    currencyCode: string;
    displayAddress: string;
    furnishedState: string;
    groupId?: any;
    hasEpc: boolean;
    hasFloorplan: boolean;
    incode: string;
    isRetirementHome: boolean;
    isSharedOwnership: boolean;
    listingCondition: string;
    listingId: number;
    listingsCategory: string;
    listingStatus: string;
    location: string;
    memberType: string;
    numBaths: number;
    numBeds: number;
    numImages: number;
    numRecepts: number;
    outcode: string;
    postalArea: string;
    postTownName: string;
    priceActual: number;
    price: number;
    priceMax: number;
    priceMin: number;
    priceQualifier: string;
    propertyHighlight: string;
    propertyType: string;
    regionName: string;
    section: string;
    sizeSqFeet: string;
    tenure?: any;
    zindex: number;
}

export interface Branch {
    __typename: string;
    branchDetailsUri: string;
    branchId: string;
    branchResultsUri: string;
    logoUrl: string;
    phone: string;
    name: string;
    memberType: string;
    address: string;
    postcode: string;
}

export interface PointsOfInterest {
    __typename: string;
    title: string;
    type: string;
    distanceMiles: number;
}

export interface EmbeddedContent {
    __typename: string;
    videos?: any;
    tours?: any;
    links?: any;
    smartViewings?: any;
}

export interface Epc {
    __typename: string;
    image?: any;
    links?: any;
    pdf?: any;
}

export interface Flags {
    __typename: string;
    furnishedState?: any;
    studentFriendly: boolean;
    tenure?: any;
    availableFromDate?: any;
}

export interface Features {
    __typename: string;
    bullets: any[];
    flags: Flags;
    highlights?: any;
}

export interface FloorPlan {
    __typename: string;
    image?: any;
    links?: any;
    pdf?: any;
}

export interface PropertyImage {
    __typename: string;
    filename: string;
    caption?: any;
}

export interface AnalyticsTaxonomy {
    __typename: string;
    location: string;
    regionName: string;
    section: string;
    acorn: number;
    acornType: number;
    areaName: string;
    bedsMax: number;
    bedsMin: number;
    branchId: number;
    branchLogoUrl: string;
    branchName: string;
    brandName: string;
    chainFree: boolean;
    companyId: number;
    countryCode: string;
    countyAreaName: string;
    currencyCode: string;
    displayAddress: string;
    furnishedState: string;
    groupId?: any;
    hasEpc: boolean;
    hasFloorplan: boolean;
    incode: string;
    isRetirementHome: boolean;
    isSharedOwnership: boolean;
    listingCondition: string;
    listingId: number;
    listingsCategory: string;
    listingStatus: string;
    memberType: string;
    numBaths: number;
    numBeds: number;
    numImages: number;
    numRecepts: number;
    outcode: string;
    postalArea: string;
    postTownName: string;
    priceActual: number;
    price: number;
    priceMax: number;
    priceMin: number;
    priceQualifier: string;
    propertyHighlight: string;
    propertyType: string;
    sizeSqFeet: string;
    tenure?: any;
    zindex: number;
}

export interface ListingUris {
    __typename: string;
    detail: string;
}

export interface Coordinates {
    __typename: string;
    latitude: number;
    longitude: number;
    isApproximate: boolean;
}

export interface Location {
    __typename: string;
    coordinates: Coordinates;
}

export interface FirstPublished {
    __typename: string;
    firstPublishedDate: Date;
    priceLabel: string;
}

export interface PriceHistory {
    __typename: string;
    firstPublished: FirstPublished;
    lastSale?: any;
    priceChanges?: any;
}

export interface ViewCount {
    __typename: string;
    viewCount30day: number;
}

export interface Content {
    __typename: string;
    floorPlan?: any;
}

export interface StatusSummary {
    __typename: string;
    label: string;
}

export interface Counts {
    __typename: string;
    numBedrooms: number;
    numBathrooms: number;
    numLivingRooms: number;
}

export interface Pricing {
    __typename: string;
    label: string;
    priceQualifierLabel: string;
    rentFrequencyLabel?: any;
    isAuction: boolean;
    pricePerFloorAreaUnit?: any;
    alternateRentFrequencyPrice?: any;
    originalCurrencyPrice?: any;
}

export interface AnalyticsEcommerce {
    __typename: string;
    brand: string;
    category: string;
    id: number;
    name: string;
    price: number;
    quantity: number;
    variant: string;
}

export interface ToRent {
    __typename: string;
    meanValue: number;
}

export interface AskingPrices {
    __typename: string;
    toRent: ToRent;
}

export interface HistoricalEstimate {
    __typename: string;
    overMonth: string;
    value: number;
    pctChangeSince: number;
    date: string;
    changeSince: number;
}

export interface Sale {
    __typename: string;
    overYear: string;
    mean: number;
    newBuilds: number;
    numSales: number;
}

export interface RecentSale {
    __typename: string;
    date: Date;
    price: number;
    propertyId: number;
    streetAddress: string;
    uri: string;
}

export interface MarketStats {
    __typename: string;
    areaName: string;
    areaNameUri: string;
    propertyTypeGroup: string;
    askingPrices: AskingPrices;
    historicalEstimates: HistoricalEstimate[];
    sales: Sale[];
    recentSales: RecentSale[];
}

export interface GroundRent {
    __typename: string;
    label?: any;
}

export interface Deposit {
    __typename: string;
    label?: any;
}

export interface ListingDetails {
    __typename: string;
    listingId: string;
    publishedOn: Date;
    category: string;
    section: string;
    additionalLinks: AdditionalLink[];
    adTargeting: AdTargeting;
    branch: Branch;
    pointsOfInterest: PointsOfInterest[];
    embeddedContent: EmbeddedContent;
    epc: Epc;
    detailedDescription: string;
    features: Features;
    floorPlan: FloorPlan;
    propertyImage: PropertyImage[];
    analyticsTaxonomy: AnalyticsTaxonomy;
    title: string;
    metaTitle: string;
    metaDescription: string;
    listingUris: ListingUris;
    location: Location;
    displayAddress: string;
    priceHistory: PriceHistory;
    viewCount: ViewCount;
    administrationFees?: any;
    content: Content;
    statusSummary: StatusSummary;
    tags: any[];
    counts: Counts;
    floorArea?: any;
    pricing: Pricing;
    analyticsEcommerce: AnalyticsEcommerce;
    uuid: string;
    marketStats: MarketStats;
    propertyType: string;
    groundRent: GroundRent;
    deposit: Deposit;
    leaseExpiry?: any;
    serviceCharge?: any;
    councilTaxBand?: any;
}

export interface RootObject {
    backToResultsLink: BackToResultsLink;
    breadcrumbs: Breadcrumb[];
    listingDetails: ListingDetails;
    __OPTIMIZELY_STATE__: string[];
}

