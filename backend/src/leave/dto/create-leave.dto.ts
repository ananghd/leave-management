export class CreateLeaveDto {
    readonly leaveReason: string;
    readonly leaveStartDate: Date;
    readonly leaveEndDate: Date;
}