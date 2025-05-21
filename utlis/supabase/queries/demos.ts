import { SupabaseClient } from "@supabase/supabase-js";

export async function getDemos(
  supabase: SupabaseClient,
  page: number = 1,
  itemsPerPage: number = 12
) {
  const startRow = (page - 1) * itemsPerPage;
  const endRow = startRow + itemsPerPage - 1;

  const {
    data: demos,
    error,
    count,
  } = await supabase
    .from("demos")
    .select("*", { count: "exact" }) // 👈 Bắt buộc để lấy tổng số dòng
    .order("id", { ascending: true })
    .range(startRow, endRow); // 👈 Lấy dữ liệu theo trang

  if (error) {
    console.error("Error fetching demos:", error);
    return { demos: null, count: 0, page, itemsPerPage };
  }

  return { demos: demos, total: count || 0, page, itemsPerPage };
}

export async function getDemosBrand(
  supabase: SupabaseClient,
  slug = null,
  brand = "",
  page: number = 1,
  itemsPerPage: number = 12
) {
  const startRow = (page - 1) * itemsPerPage;
  const endRow = startRow + itemsPerPage - 1;

  const {
    data: demos,
    error,
    count,
  } = await supabase
    .from("demos")
    .select("*", { count: "exact" }) // Bắt buộc để lấy tổng số dòng
    .eq("brand", brand) // Lọc các bản ghi có brand là 'studio'
    .neq("slug", slug) // Loại trừ bản ghi có id = 1
    .order("id", { ascending: true })
    .range(startRow, endRow); // Lấy dữ liệu theo trang

  if (error) {
    console.error("Error fetching demos:", error);
    return { demos: null, count: 0, page, itemsPerPage };
  }

  return { demos, total: count || 0, page, itemsPerPage };
}

export async function getDemoDetail(supabase: SupabaseClient, slug) {
  const { data: demos, error } = await supabase
    .from("demos")
    .select("*", { count: "exact" })
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching demos:", error);
    return { demos: null };
  }

  return { demos };
}
