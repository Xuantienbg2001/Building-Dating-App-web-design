using System.Collections.Generic;
using API.Helpers;
using Xunit;

namespace API.Tests;

public class PaginationTests
{
    [Fact]
    public void PagedList_TotalPages_CalculatesCorrectly()
    {
        var pagedList = new PagedList<int>(new List<int>(), 10, 1, 3);
        Assert.Equal(4, pagedList.TotalPages); // 10/3 làm tròn lên là 4
    }

    [Fact]
    public void PagedList_HasNextPage_IsTrue()
    {
        var pagedList = new PagedList<int>(new List<int>(), 10, 1, 5);
        Assert.True(pagedList.HasNextPage); // Trang 1 của 2 trang -> Có trang tiếp
    }

    [Fact]
    public void PagedList_HasPreviousPage_IsFalseAtStart()
    {
        var pagedList = new PagedList<int>(new List<int>(), 10, 1, 5);
        Assert.False(pagedList.HasPreviousPage); // Trang 1 -> Không có trang trước
    }
}