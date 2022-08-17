export interface APIModel {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Datum[];
    support:     Support;
}

export interface Datum {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAPIModel(json: string): APIModel {
        return JSON.parse(json);
    }

    public static aPIModelToJson(value: APIModel): string {
        return JSON.stringify(value);
    }
}
