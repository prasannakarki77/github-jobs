"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, Eye, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SafePost } from "@/types/prisma";
import { fDate } from "@/lib/utils";

export const columns: ColumnDef<SafePost>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Email
        //   <ArrowUpDown className="ml-2 h-4 w-4" />
        // </Button>
        <div className="text-left">Title</div>
      );
    },
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return <div className="text-left">Description</div>;
    },
    cell: ({ row }) => (
      <Button variant={"outline"} size={"sm"}>
        <Eye size={15} className=" mr-2" /> View
      </Button>
    ),
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Location
        //   <ArrowUpDown className="ml-2 h-4 w-4" />
        // </Button>
        <div className="text-left">Location</div>
      );
    },
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("location")}</div>
    ),
  },
  {
    accessorKey: "duration",
    header: () => <div className="text-left">Duration</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("duration")}</div>
      );
    },
  },
  {
    accessorKey: "expiresAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Expires At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {fDate(row.getValue("expiresAt"))}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Creatded At
          <ArrowUpDown className="ml-2 h-4 w-4 " />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {fDate(row.getValue("createdAt"))}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

interface Props {
  data: SafePost[];
}

export function DataTable({ data }: Props) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter titles..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Duration <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={
                table.getColumn("duration")?.getFilterValue() == undefined
              }
              onCheckedChange={(value) =>
                table.getColumn("duration")?.setFilterValue(undefined)
              }
            >
              All
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={
                table.getColumn("duration")?.getFilterValue() == "Part Time"
              }
              onCheckedChange={(value) =>
                table.getColumn("duration")?.setFilterValue("Part Time")
              }
            >
              Part Time
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={
                table.getColumn("duration")?.getFilterValue() == "Full Time"
              }
              onCheckedChange={(value) =>
                table.getColumn("duration")?.setFilterValue("Full Time")
              }
            >
              Full Time
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={
                table.getColumn("duration")?.getFilterValue() == "Contract"
              }
              onCheckedChange={(value) =>
                table.getColumn("duration")?.setFilterValue("Contract")
              }
            >
              Contract
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
