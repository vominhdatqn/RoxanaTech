import { useQuery } from "@tanstack/react-query";
import { SupabaseClient } from "@supabase/supabase-js";
import { getDemoDetail, getDemos, getDemosBrand } from "@/utlis/supabase/queries/demos";

export function useGetDemos(
  supabase: SupabaseClient,
  page: number = 1,
  itemsPerPage: number = 12,
  options?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    refetchInterval?: number;
    refetchIntervalInBackground?: boolean;
    staleTime?: number;
  }
) {
  return useQuery({
    queryKey: ["demos", page, itemsPerPage],
    queryFn: () => getDemos(supabase, page, itemsPerPage),
    staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
    cacheTime: 1000 * 60 * 60 * 24 * 30,
    keepPreviousData: true,
    ...options,
  });
}

export function useGetDemoDetail(
  supabase: SupabaseClient,
  id,
  options?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    refetchInterval?: number;
    refetchIntervalInBackground?: boolean;
    staleTime?: number;
  }
) {

  return useQuery({
    queryKey: ["demoDetail", id],
    queryFn: () => getDemoDetail(supabase, id),
    staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
    cacheTime: 1000 * 60 * 60 * 24 * 30,
    keepPreviousData: true,
    ...options,
  });
}

export function useGetDemoBrandDetail(
  supabase: SupabaseClient,
  id,
  brand,
  options?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    refetchInterval?: number;
    refetchIntervalInBackground?: boolean;
    staleTime?: number;
  }
) {
  return useQuery({
    queryKey: ["demoBrandDetail", id, brand],
    queryFn: () => getDemosBrand(supabase, id, brand),
    staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
    cacheTime: 1000 * 60 * 60 * 24 * 30,
    keepPreviousData: true,
    ...options,
  });
}