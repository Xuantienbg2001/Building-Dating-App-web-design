namespace TaskBoard.Api.Security;

public sealed class JwtOptions
{
    public const string SectionName = "Jwt";
    public string Issuer { get; set; } = "TaskBoard";
    public string Audience { get; set; } = "TaskBoard.Client";
    public string SigningKey { get; set; } = "ChangeMe_To_A_32_Char_Minimum_Secret";
    public int ExpirationMinutes { get; set; } = 120;
}
