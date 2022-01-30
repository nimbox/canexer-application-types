export declare type ID = string;
export declare type Instant = Date;
export declare type LocalDate = Date;
export declare type LocalDateTime = Date;
export declare type JSON = any;
export declare type URL = string;
export declare type Upload = any;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    kind: string;
}
export interface Contact extends Local {
    position: string;
    comment: string;
    displayName: string;
    contactId: number;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    kind: string;
    code: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    representatives: Representative[];
    receivableDocuments: ReceivableDocument[];
    urls: ContactUrl[];
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
}
export interface Local {
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    kind: string;
    createdBy?: User;
    updatedBy?: User;
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    stateSequence: number;
    status: string;
    flowId: number;
    stateId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
}
export interface Application extends Local {
    name: string;
    installed: Boolean;
    configuration: string;
    enabled: Boolean;
    meta: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceList extends Local {
    comment: string;
    name: string;
    meta: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface Business extends Local {
    zone: string;
    provider: string;
    country: string;
    name: string;
    configuration?: string;
    description: string;
    currency: string;
    scheduled: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    enabled: Boolean;
    boxId: number;
    taxId?: string;
    locale: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    currencies?: BusinessCurrency[];
    synchronization?: SynchronizationStatus;
}
export interface ContactAddress extends ContactElement, Local {
    country?: string;
    state?: string;
    reference?: string;
    street?: string;
    postal?: string;
    city?: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
export interface DownloadablePackage {
    name?: string;
    id?: string;
    versions?: DownloadablePackageVersion[];
    latestVersion?: DownloadablePackageVersion;
}
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
    fulfilled?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
}
export interface DefaultTask {
    zone?: string;
    id: ID;
    description: string;
    due?: Date;
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    meta: string;
    issued: Date;
    kind: string;
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
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
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
export interface ContactNetwork extends ContactElement, Local {
    provider: string;
    handle: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DownloadablePackageVersion {
    version?: string;
}
export interface Organization extends Contact, Local {
    position: string;
    comment: string;
    displayName: string;
    contactId: number;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    kind: string;
    code: string;
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
    description?: string;
    parentId?: ID;
    parentSequence: number;
    backgroundColor: string;
    color: string;
    flowId: ID;
    title: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Representative extends Local {
    comment: string;
    name: string;
    contactId: number;
    meta: string;
    taxId: string;
    kind: string;
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
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface SaleDocument extends Local {
    comment?: string;
    entry: string;
    displayOn?: Date;
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
    representativeId: number;
    customerId: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
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
    kind: string;
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
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface TaskHistory extends Local {
    responsibleId?: number;
    start: Date;
    due: Date;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Hashtag extends Local {
    handle: string;
    description: string;
    backgroundColor: string;
    color: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UnitListDetail extends Local {
    alternativeUnit: string;
    alternativeFactor: number;
    unitListId: number;
    kind: string;
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
export interface ReceivablePending {
    count?: number;
    dueDays?: number;
    pending?: number;
}
export interface SynchronizationStatus {
    nextStart?: Date;
    running?: Boolean;
    start?: Date;
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface UnitList extends Local {
    name: string;
    baseUnit: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    unit: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    role: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    user: User;
    box: Box;
}
export interface TaskFlow extends Local {
    description?: string;
    backgroundColor: string;
    color: string;
    title: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    structure?: ClassifiedTaskFlowStructure;
    states?: TaskState[];
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
export interface PendingReceivableResultData {
    dueDaysClass?: number;
    contactId?: ID;
    customerId?: ID;
    contactDisplayName?: string;
    customerName?: string;
    dueDays?: number;
    debits?: number;
    credits?: number;
    customerRepresentativeId?: ID;
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface PriceListDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateMemberApplicationPermissionResult {
    permission?: MemberApplicationPermission;
    errors?: UserError[];
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface PendingReceivablesHistoryResult {
    data?: ReceivablePendingByDate[];
    now?: Date;
}
export interface Note extends Local {
    zone: string;
    displayOn?: Date;
    description: string;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    kind: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface Product extends Local {
    comment: string;
    name: string;
    currency: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    meta: string;
    price: number;
    unit: string;
    kind: string;
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
export interface User extends Local {
    zone: string;
    handle?: string;
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
    enabled?: Boolean;
    locale: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    role: string;
    avatarOriginal?: string;
    preferences?: JSON;
    avatar?: string;
    tasks?: Task[];
    applicationPermissions: MemberApplicationPermission[];
    applicationBusinessPermissions: MemberApplicationBusinessPermission[];
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface Customer extends Local {
    comment: string;
    name: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    meta: string;
    taxId: string;
    kind: string;
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
    tags: Tag[];
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
    business: Business;
    sales?: SaleDocument[];
    moons?: MoonAnalysisResult;
}
export interface QuintileValue {
    value: number;
    count: number;
    quintile: number;
}
export interface ReceivableReconciliationDetail extends Local {
    comment: string;
    entry: string;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    originalCurrency: string;
    originalRate: number;
    meta: string;
    kind: string;
    receivableReconciliationId: number;
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
export interface ReceivablePendingByDate {
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    date?: Date;
    total?: ReceivablePendingByEntry;
}
export interface UserReference extends Local {
    handle: string;
    referenceId: number;
    userId: number;
    kind: string;
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
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TagDetail extends Local {
    referenceId: number;
    tagId: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Task extends Local {
    zone: string;
    description?: string;
    stateSequence?: number;
    backgroundColor: string;
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    parent?: Task;
    children?: Task[];
    reference?: Local;
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
}
export interface ReceivableDocument extends Local {
    comment?: string;
    entry: string;
    displayOn?: Date;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    meta?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    kind: string;
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
    customer?: Customer;
    reconciliationDetails?: ReceivableReconciliationDetail[];
    paid?: Date;
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
    currency: string;
    businessId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface MoonAnalysisResult {
    delay: QuintileValue;
    sales: QuintileValue;
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    month: number;
    day: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface BoxApplicationBusinessPermission extends Local {
    configuration: string;
    applicationId: number;
    businessId: number;
    meta: string;
    boxId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PackageBundle {
    version?: string;
    name?: string;
    file?: string;
    installed?: Date;
    provides?: string;
    vendor?: string;
    built?: Date;
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface MemberApplicationBusinessPermission extends Local {
    configuration: string;
    applicationId: number;
    businessId: number;
    memberId: number;
    meta: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    member: Member;
    application: Application;
    business: Business;
}
export interface Tag extends Local {
    description: string;
    backgroundColor: string;
    color: string;
    meaning: string;
    kind: string;
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
    description: string;
    code: string;
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
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
export interface Stock extends Local {
    warehouseId: number;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface HashtagReference extends Local {
    handle: string;
    referenceId: number;
    hashtagId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Person extends Contact, Local {
    position: string;
    comment: string;
    displayName: string;
    contactId: number;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    kind: string;
    code: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface Warehouse extends Local {
    comment: string;
    name: string;
    meta: string;
    kind: string;
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
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Box extends Local {
    zone: string;
    country: string;
    name: string;
    configuration: string;
    currency: string;
    token: string;
    locale: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    applications: Application[];
    users: User[];
    businesses: Business[];
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface SaleDocumentDetail extends Local {
    comment: string;
    entry: string;
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
    productId: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    tax: number;
    profit: number;
    item: string;
    meta: string;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface ContactLocation extends ContactElement, Local {
    latitude: number;
    longitude: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
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
    configuration: string;
    applicationId: number;
    memberId: number;
    meta: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    member: Member;
    application: Application;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface UpdateMemberApplicationBusinessPermissionResult {
    permission?: MemberApplicationBusinessPermission;
    errors?: UserError[];
}
export interface BoxApplicationPermission extends Local {
    configuration: string;
    applicationId: number;
    meta: string;
    boxId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    dueDaysClass?: number;
    debits?: number;
    credits?: number;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface TagFilterInput {
    limit?: number;
    q?: string;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface UpdateBusinessInput {
    zone?: string;
    provider?: string;
    country?: string;
    name?: string;
    configuration?: string;
    description?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    enabled?: Boolean;
    taxId?: string;
    locale?: string;
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskFlowInput {
    description?: string;
    backgroundColor?: string;
    color?: string;
    title?: string;
}
export interface BusinessFilterInput {
    enabled?: Boolean;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    stateSequence?: number;
    status?: string;
}
export interface ContactNetworkInput {
    provider?: string;
    handle?: string;
    sequence?: number;
    locus?: string;
}
export interface UpdateNoteInput {
    zone?: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
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
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface CreateBusinessInput {
    zone?: string;
    provider?: string;
    country?: string;
    name?: string;
    configuration?: string;
    description?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    enabled?: Boolean;
    taxId?: string;
    locale?: string;
}
export interface UpdateTaskInput {
    zone?: string;
    description?: string;
    responsibleId?: ID;
    backgroundColor?: string;
    color?: string;
    due?: Date;
    title?: string;
}
export interface ApplicationFilterInput {
    enabled?: Boolean;
    installed?: Boolean;
}
export interface ReceivablePaymentHistoryInputFilter {
    businessId?: ID[];
    customerContactId?: ID;
    representativeContactId?: ID;
    months?: number;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface TagInput {
    description?: string;
    type?: string;
    parentId?: ID;
    backgroundColor?: string;
    color?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    remoteSource?: string;
    pending?: Boolean;
}
export interface ContactAddressInput {
    country?: string;
    state?: string;
    reference?: string;
    street?: string;
    postal?: string;
    city?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface UpdateTaskStateInput {
    description?: string;
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
    color?: string;
    title?: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface CreateTaskInput {
    parentId?: ID;
    referenceId?: ID;
    supervise?: Boolean;
    zone?: string;
    description?: string;
    responsibleId?: ID;
    backgroundColor?: string;
    color?: string;
    due?: Date;
    title?: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface UpdateTaskFlowInput {
    description?: string;
    backgroundColor?: string;
    color?: string;
    title?: string;
}
export interface AnalysisPerspectiveInput {
    businesses?: ID[];
    currencies?: string[];
}
export interface UserInput {
    zone?: string;
    handle?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    avatarOriginal?: Upload;
    enabled?: Boolean;
    role?: string;
    locale?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    description?: string;
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
    color?: string;
    title?: string;
}
