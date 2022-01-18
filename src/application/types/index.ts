export type ID = string;
export type Instant = Date;
export type LocalDate = Date;
export type URL = string;
export type JSON = any;
export type Upload = any;
export type LocalDateTime = Date;
export interface ContactElement extends Local {
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Contact extends Local {
    comment: string;
    displayName: string;
    position: string;
    kind: string;
    meta: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
    urls: ContactUrl[];
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    representatives: Representative[];
    receivableDocuments: ReceivableDocument[];
}
export interface Local {
    version: number;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    createdBy?: User;
    updatedBy?: User;
}
export interface Person extends Contact, Local {
    comment: string;
    displayName: string;
    position: string;
    kind: string;
    meta: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskState extends Local {
    kind: string;
    flowId: ID;
    title: string;
    color: string;
    backgroundColor: string;
    parentId?: ID;
    description?: string;
    parentSequence: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactNetwork extends ContactElement, Local {
    provider: string;
    handle: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface SynchronizationStatus {
    start?: Date;
    running?: Boolean;
    nextStart?: Date;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    debits?: number;
    credits?: number;
    dueDaysClass?: number;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ContactAddress extends ContactElement, Local {
    country?: string;
    state?: string;
    kind: string;
    street?: string;
    postal?: string;
    city?: string;
    reference?: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface ContactLocation extends ContactElement, Local {
    kind: string;
    latitude: number;
    longitude: number;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Product extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    price: number;
    unit: string;
    currency: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Stock extends Local {
    kind: string;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface ContactUrl extends ContactElement, Local {
    kind: string;
    specification: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UnitList extends Local {
    name: string;
    kind: string;
    baseUnit: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Zone {
    name: string;
    offset: number;
    code: string;
    description: string;
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    month: number;
    kind: string;
    day: number;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface PendingReceivableResultData {
    customerRepresentativeId?: ID;
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerId?: ID;
    contactId?: ID;
    dueDaysClass?: number;
}
export interface ReceivablePendingByDate {
    date?: Date;
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    total?: ReceivablePendingByEntry;
}
export interface PendingReceivablesResultData {
    past?: PendingReceivablesResultDataGroup;
    future?: PendingReceivablesResultDataGroup;
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface Box extends Local {
    country: string;
    zone: string;
    name: string;
    locale: string;
    kind: string;
    token: string;
    configuration: string;
    currency: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    users: User[];
    businesses: Business[];
    applications: Application[];
}
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface Task extends Local {
    zone: string;
    kind: string;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    backgroundColor: string;
    stateSequence?: number;
    description?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    parent?: Task;
    reference?: Local;
    children?: Task[];
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface PackageBundle {
    version?: string;
    name?: string;
    file?: string;
    vendor?: string;
    built?: Date;
    provides?: string;
    installed?: Date;
}
export interface UpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface Currency extends Local {
    name: string;
    kind: string;
    code: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocument extends Local {
    comment?: string;
    entry: string;
    kind: string;
    payment: string;
    shipped?: Date;
    expense: number;
    other: number;
    tax: number;
    profit: number;
    meta?: string;
    taxId?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    displayOn?: Date;
    representativeId: number;
    customerId: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    required?: Date;
    delivered?: Date;
    subtotal: number;
    discount: number;
    saleTotal: number;
    originalSubtotal: number;
    originalDiscount: number;
    originalExpense: number;
    originalOther: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivable?: ReceivableDocument;
}
export interface DownloadablePackageVersion {
    version?: string;
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface ReceivablePending {
    count?: number;
    dueDays?: number;
    pending?: number;
}
export interface CreateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface Application extends Local {
    name: string;
    kind: string;
    meta: string;
    configuration: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Tag extends Local {
    kind: string;
    color: string;
    meaning: string;
    backgroundColor: string;
    description: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxApplicationPermission extends Local {
    kind: string;
    meta: string;
    boxId: number;
    configuration: string;
    applicationId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableDocument extends Local {
    comment?: string;
    entry: string;
    kind: string;
    meta?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    displayOn?: Date;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    paid?: Date;
    customer?: Customer;
    reconciliationDetails?: ReceivableReconciliationDetail[];
}
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface MemberApplicationPermission extends Local {
    kind: string;
    meta: string;
    configuration: string;
    applicationId: number;
    memberId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface Organization extends Contact, Local {
    comment: string;
    displayName: string;
    position: string;
    kind: string;
    meta: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceListUnitDetail extends Local {
    kind: string;
    price: number;
    unit: string;
    currency: string;
    priceListId: number;
    productId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableReconciliationDetail extends Local {
    comment: string;
    entry: string;
    receivableReconciliationId: number;
    kind: string;
    meta: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Customer extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    taxId: string;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    contactId: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    sales?: SaleDocument[];
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
}
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface BoxApplicationBusinessPermission extends Local {
    kind: string;
    meta: string;
    boxId: number;
    configuration: string;
    applicationId: number;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface User extends Local {
    zone: string;
    handle?: string;
    locale: string;
    kind: string;
    uid?: string;
    blocked?: Date;
    avatarX?: number;
    avatarY?: number;
    avatarInitials: string;
    avatarColor: string;
    avatarBackgroundColor: string;
    avatarSize?: number;
    emailAddress?: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    firstName: string;
    lastName?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tasks?: Task[];
    avatar?: string;
    avatarOriginal?: string;
    role: string;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface Country extends Local {
    name: string;
    kind: string;
    code: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BusinessCurrency extends Local {
    kind: string;
    currency: string;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    kind: string;
    role: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    box: Box;
}
export interface UserReference extends Local {
    handle: string;
    kind: string;
    userId: number;
    referenceId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Business extends Local {
    country: string;
    provider: string;
    zone: string;
    name: string;
    locale: string;
    kind: string;
    boxId: number;
    taxId?: string;
    enabled: Boolean;
    configuration?: string;
    currency: string;
    scheduled: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    synchronization?: SynchronizationStatus;
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface Representative extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    taxId: string;
    contactId: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    kind: string;
    meta: string;
    issued: Date;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface Unit extends Local {
    name: string;
    kind: string;
    code: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DefaultTask {
    zone?: string;
    id: ID;
    due?: Date;
    description: string;
}
export interface UnitListDetail extends Local {
    kind: string;
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Note extends Local {
    zone: string;
    kind: string;
    start: Date;
    pinned: Boolean;
    locked: Boolean;
    displayOn?: Date;
    referenceId: number;
    latitude?: number;
    longitude?: number;
    description: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    kind: string;
    status: string;
    flowId: number;
    stateId: number;
    stateSequence: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
}
export interface Hashtag extends Local {
    handle: string;
    kind: string;
    color: string;
    backgroundColor: string;
    description: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TagDetail extends Local {
    kind: string;
    tagId: number;
    referenceId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface HashtagReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    hashtagId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface MemberApplicationBusinessPermission extends Local {
    kind: string;
    meta: string;
    configuration: string;
    applicationId: number;
    businessId: number;
    memberId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceListDetail extends Local {
    kind: string;
    price: number;
    currency: string;
    priceListId: number;
    productId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocumentDetail extends Local {
    comment: string;
    entry: string;
    kind: string;
    tax: number;
    profit: number;
    item: string;
    meta: string;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    productId: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    displayLine: number;
    discount: number;
    saleTotal: number;
    originalDiscount: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    saleDocumentId: number;
    warehouseId: number;
    displayQuantity: number;
    displayUnit: string;
    displayFactor: number;
    displayCurrency: string;
    displayRate: number;
    displayPrice: number;
    quantity: number;
    salePrice: number;
    originalPrice: number;
    originalSalePrice: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Warehouse extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface PendingReceivablesHistoryResult {
    data?: ReceivablePendingByDate[];
    now?: Date;
}
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface TaskHistory extends Local {
    kind: string;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    start: Date;
    due: Date;
    responsibleId?: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface TaskFlow extends Local {
    kind: string;
    title: string;
    color: string;
    backgroundColor: string;
    description?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
}
export interface PriceList extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DownloadablePackage {
    name?: string;
    id?: string;
    latestVersion?: DownloadablePackageVersion;
    versions?: DownloadablePackageVersion[];
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactPhoneInput {
    number?: string;
    locus?: string;
    sequence?: number;
}
export interface UserInput {
    zone?: string;
    handle?: string;
    locale?: string;
    uid?: string;
    blocked?: Boolean;
    avatarX?: number;
    avatarY?: number;
    role?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    avatarOriginal?: Upload;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface UpdateTaskInput {
    zone?: string;
    title?: string;
    color?: string;
    due?: Date;
    backgroundColor?: string;
    responsibleId?: ID;
    description?: string;
}
export interface UserFilterInput {
    q?: string;
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    status?: string;
    stateSequence?: number;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    locus?: string;
    sequence?: number;
}
export interface CreateTaskFlowInput {
    title?: string;
    color?: string;
    backgroundColor?: string;
    description?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface CreateBusinessInput {
    country?: string;
    provider?: string;
    zone?: string;
    name?: string;
    locale?: string;
    taxId?: string;
    enabled?: Boolean;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    start?: Date;
    pinned?: Boolean;
    locked?: Boolean;
    latitude?: number;
    longitude?: number;
    description?: string;
}
export interface ContactNetworkInput {
    provider?: string;
    handle?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface CreateTaskStateInput {
    flowId?: ID;
    title?: string;
    color?: string;
    backgroundColor?: string;
    parentId?: ID;
    description?: string;
    parentSequence?: number;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface UpdateTaskFlowInput {
    title?: string;
    color?: string;
    backgroundColor?: string;
    description?: string;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    pending?: Boolean;
    remoteSource?: string;
}
export interface UpdateBusinessInput {
    country?: string;
    provider?: string;
    zone?: string;
    name?: string;
    locale?: string;
    taxId?: string;
    enabled?: Boolean;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
}
export interface ContactAddressInput {
    country?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    reference?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface CreateTaskInput {
    supervise?: Boolean;
    referenceId?: ID;
    parentId?: ID;
    zone?: string;
    title?: string;
    color?: string;
    due?: Date;
    backgroundColor?: string;
    responsibleId?: ID;
    description?: string;
}
export interface TagInput {
    description?: string;
    type?: string;
    color?: string;
    backgroundColor?: string;
    parentId?: ID;
}
export interface ContactEmailInput {
    address?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    businessId?: ID[];
    customerContactId?: ID;
    representativeContactId?: ID;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface UpdateNoteInput {
    zone?: string;
    start?: Date;
    pinned?: Boolean;
    locked?: Boolean;
    latitude?: number;
    longitude?: number;
    description?: string;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface ContactUrlInput {
    specification?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    locus?: string;
    sequence?: number;
}
export interface UpdateTaskStateInput {
    title?: string;
    color?: string;
    backgroundColor?: string;
    parentId?: ID;
    description?: string;
    parentSequence?: number;
}

