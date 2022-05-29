import axios from "axios";

export enum PageType {
    SingleProperty = 1,
    ListProperties
}

export interface ICurrency {
    data(): void;
    buildingBlocks(): void;
    endpointId: string;
}


export class BasePageType implements ICurrency {
    constructor(public endpointId: string) {
        console.log('endpointId', this.endpointId)
    }

    data = async () => {
        let response = null;
        try {
            response = await axios.get(
                `http://localhost:4000/${this.endpointId}`
            );
        } catch (e) {
            response = null;
            throw new Error(e.message)
        }
        if (response) {
            console.log(this.endpointId)
            return response.data;
        }
    }
    buildingBlocks(): void {
        console.log('base buildingBlocks')
    }
}


export class ListProperties extends BasePageType {
    constructor(public endpointId: string) {
        super(endpointId);
        console.log('ListProperties', this.endpointId)
    }

}


export class SingleProperty extends BasePageType {
    constructor(public endpointId: string) {
        super(endpointId);
        console.log('SingleProperty', this.endpointId)
    }

}

export class PageFactory {
    public createPage(endpointId: string, page_type: PageType) {

        if (page_type === PageType.ListProperties) {
            return new ListProperties(endpointId)
        }
        if (page_type === PageType.SingleProperty) {
            return new SingleProperty(endpointId)
        }

    }
}
