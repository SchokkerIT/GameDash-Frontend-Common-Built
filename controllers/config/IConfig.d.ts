export default interface IConfig {
    app: {
        title: string;
        description: string;
        keywords: string[];
    };
    api: {
        isSecure: boolean;
        domain: string;
    };
    cookie: {
        domain: string;
    };
    translation: {
        language: {
            default: {
                name: string;
            };
        };
    };
    tracker: {
        listener: {
            tickInterval: number;
        };
    };
    alertbar: {
        defaultTab: 'notifications';
    };
    time: {
        date: {
            format: string;
        };
        format: string;
    };
    instance: {
        tools: {
            fileSystem: {
                manager: {
                    upload: {
                        maxConcurrentFileCount: number;
                    };
                    file: {
                        viewable: string[];
                    };
                    editor: {
                        languages: {
                            name: string;
                            extensions: string[];
                        }[];
                    };
                };
            };
        };
    };
    billing: {
        cart: {
            payment: {
                methods: {
                    id: string;
                }[];
            };
        };
        payment: {
            gateway: {
                stripe?: {
                    sandbox?: {
                        apiKey: string;
                    };
                    production?: {
                        apiKey: string;
                    };
                };
                paypal?: {
                    sandbox?: {
                        clientId: string;
                    };
                    production?: {
                        clientId: string;
                    };
                };
            };
        };
    };
}
