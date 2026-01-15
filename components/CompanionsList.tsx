import { cn } from "@/lib/utils";
import { Companion } from "@/types/companion";
import Link from "next/link";
import React from 'react'
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}
const CompanionsList = ({ title, companions, classNames }: CompanionsListProps

) => {
  return (
    <article className={cn(classNames, 'companions-list')}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <div>Recent Sessions</div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {companions?.map(({ id, subject, name, topic, duration }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{ backgroundColor: '#F5F5F5' }}>
                      <Image src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-2xl">{name}</p>
                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>

              <TableCell>
                <div className="subject-badge w-fit max-md:hidden"></div>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionsList