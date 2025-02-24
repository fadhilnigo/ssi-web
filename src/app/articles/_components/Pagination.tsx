import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
} from '~/@shared/_components/ui';

const ArticlePagination = () => (
  <Pagination className="mt-10">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink isActive>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default ArticlePagination;
