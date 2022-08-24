export class User {
    private _displayName!: string
    private _email!: string
    private _phoneNumber!: string;
    private _photoURL!: string
    private _metadata = {
        createdAt: 0
    };
    private _reloadUserInfo = {
        photoUrl: ''
    };

    constructor() {
        this._displayName = "";
        this._email = "";
        this._photoURL = "";
        this._phoneNumber = "";
    }

    public get reloadUserInfo() {
        return this._reloadUserInfo;
    }
    public set reloadUserInfo(value) {
        this._reloadUserInfo = value;
    }

    public get metadata() {
        return this._metadata;
    }
    public set metadata(value) {
        this._metadata = value;
    }


    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get displayName(): string {
        return this._displayName
    }
    public set displayName(value: string) {
        this._displayName = value
    }

    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }

    public get photoURL(): string {
        return this._photoURL
    }
    public set photoURL(value: string) {
        this._photoURL = value
    }

}
